import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { AuthContext } from "../context/AuthContext";

function RoadmapPopup() {
  const { roadmapStatus, setRoadmapStatus, currentRoadmapPopup } =
    useContext(AppContext);
  const { user } = useContext(AuthContext);

  const handleFinished = async () => {
    const updatedStatus = {
      status: "finished",
    };
    const newStatus = {
      name: currentRoadmapPopup,
      status: "finished",
    };

    try {
      const id = getItemId(currentRoadmapPopup);

      if (id) {
        await patchData(id, updatedStatus);
      } else {
        await postData(newStatus);
      }
      console.log(`Item "${currentRoadmapPopup}" marked as finished`);
    } catch (error) {
      console.error(
        "Error marking item as finished:",
        (error as Error).message
      );
    }

    updateStatus("finished");
  };

  const handleDoing = async () => {
    const updatedStatus = {
      status: "doing",
    };
    const newStatus = {
      name: currentRoadmapPopup,
      status: "doing",
    };

    try {
      const id = getItemId(currentRoadmapPopup);
      if (id) {
        await patchData(id, updatedStatus);
      } else {
        await postData(newStatus);
      }
      console.log(`Item "${currentRoadmapPopup}" marked as doing`);
    } catch (error) {
      console.error(
        "Error marking item as finished:",
        (error as Error).message
      );
    }

    updateStatus("doing");
  };

  const handleTodo = async () => {
    const updatedStatus = {
      status: "todo",
    };
    const newStatus = {
      name: currentRoadmapPopup,
      status: "todo",
    };

    try {
      const id = getItemId(currentRoadmapPopup);

      if (id) {
        await patchData(id, updatedStatus);
      } else {
        await postData(newStatus);
      }

      console.log(`Item "${currentRoadmapPopup}" marked as todo`);
    } catch (error) {
      console.error(
        "Error marking item as finished:",
        (error as Error).message
      );
    }

    updateStatus("todo");
  };

  const getItemId = (roadmapItem: string) => {
    const foundItem = roadmapStatus?.find(
      (item: { _id: string; name: string; status: string; user_id: string }) =>
        item.name === roadmapItem
    );
    return foundItem?._id;
  };

  const patchData = async (id: string, updatedStatus: { status: string }) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/roadmap-status/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.token}`,
          },
          body: JSON.stringify(updatedStatus),
        }
      );
      if (!response.ok) {
        throw new Error("Error updating data");
      }

      const updatedItem = await response.json();
      console.log("Updated item:", updatedItem);
    } catch (error) {
      throw new Error("Error updating data");
    }
  };

  const postData = async (newStatus: { name: string; status: string }) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/roadmap-status/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.token}`,
          },
          body: JSON.stringify(newStatus),
        }
      );
      if (!response.ok) {
        throw new Error("Error setting data");
      }

      const updatedItem = await response.json();
      console.log("Updated item:", updatedItem);
    } catch (error) {
      throw new Error("Error setting data");
    }
  };

  const updateStatus = (newStatus: string) => {
    const _roadmapStatus = roadmapStatus.map((item) => {
      if (item.name === currentRoadmapPopup) {
        return { ...item, status: newStatus, name: currentRoadmapPopup };
      }
      return item;
    });
    setRoadmapStatus(_roadmapStatus);
  };

  return (
    <>
      <dialog id="roadmapModel" className="modal">
        <form method="dialog" className="modal-box">
          <div className="flex justify-center gap-10">
            {user && (
              <>
                <div
                  onClick={() => handleFinished()}
                  className="btn-success btn"
                >
                  Finished
                </div>
                <div onClick={() => handleDoing()} className="btn-warning btn">
                  Doing
                </div>
                <div onClick={() => handleTodo()} className="btn-error btn">
                  To Do
                </div>
              </>
            )}
          </div>
          <h2 className="mt-5 text-xl font-bold">
            {currentRoadmapPopup.toUpperCase()}
          </h2>

          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </>
  );
}
export default RoadmapPopup;
