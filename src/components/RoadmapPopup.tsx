import { useContext } from "react";
import { AppContext } from "../AppContext";

function RoadmapPopup() {
  const { roadmapStatus, currentRoadmapPopup } = useContext(AppContext);

  const handleFinished = async () => {
    try {
      const id = getItemId(currentRoadmapPopup);
      console.log(id);
      if (!id) {
        console.log(`Item ${currentRoadmapPopup} not found`);
        return;
      }

      const updatedData = {
        status: "finished",
      };

      await patchData(id, updatedData);
      console.log(`Item "${currentRoadmapPopup}" marked as finished`);
    } catch (error) {
      console.error(
        "Error marking item as finished:",
        (error as Error).message
      );
    }
  };

  const handleDoing = async () => {
    try {
      const id = getItemId(currentRoadmapPopup);
      console.log(id);
      if (!id) {
        console.log(`Item ${currentRoadmapPopup} not found`);
        return;
      }

      const updatedData = {
        status: "doing",
      };

      await patchData(id, updatedData);
      console.log(`Item "${currentRoadmapPopup}" marked as doing`);
    } catch (error) {
      console.error(
        "Error marking item as finished:",
        (error as Error).message
      );
    }
  };

  const handleTodo = async () => {
    try {
      const id = getItemId(currentRoadmapPopup);
      console.log(id);
      if (!id) {
        console.log(`Item ${currentRoadmapPopup} not found`);
        return;
      }

      const updatedData = {
        status: "todo",
      };

      await patchData(id, updatedData);
      console.log(`Item "${currentRoadmapPopup}" marked as todo`);
    } catch (error) {
      console.error(
        "Error marking item as finished:",
        (error as Error).message
      );
    }
  };

  const getItemId = (roadmapItem: string) => {
    const foundItem = roadmapStatus?.find(
      (item: { _id: string; name: string; status: string }) =>
        item.name === roadmapItem
    );
    return foundItem?._id;
  };

  const patchData = async (id: string, updatedData: { status: string }) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/roadmap-status/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
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
  return (
    <>
      <dialog id="roadmapModel" className="modal">
        <form method="dialog" className="modal-box">
          <div className="flex justify-center gap-10">
            <div onClick={() => handleFinished()} className="btn-success btn">
              Finished
            </div>
            <div onClick={() => handleDoing()} className="btn-warning btn">
              Doing
            </div>
            <div onClick={() => handleTodo()} className="btn-error btn">
              To Do
            </div>
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
