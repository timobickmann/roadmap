import { useContext } from "react";
import { AppContext } from "../AppContext";

interface IProps {
  roadmapItem: string;
}

function RoadmapPopup({ roadmapItem }: IProps) {
  const { roadmapStatus } = useContext(AppContext);

  const handleFinished = async () => {
    try {
      const id = getItemId(roadmapItem);
      console.log(id);
      if (!id) {
        console.log(`Item ${roadmapItem} not found`);
        return;
      }

      const updatedData = {
        status: "finished",
      };

      await patchData(id, updatedData);
      console.log(`Item "${roadmapItem}" marked as finished`);
    } catch (error) {
      console.error(
        "Error marking item as finished:",
        (error as Error).message
      );
    }
  };

  const handleDoing = async () => {
    try {
      const id = getItemId(roadmapItem);
      console.log(id);
      if (!id) {
        console.log(`Item ${roadmapItem} not found`);
        return;
      }

      const updatedData = {
        status: "doing",
      };

      await patchData(id, updatedData);
      console.log(`Item "${roadmapItem}" marked as doing`);
    } catch (error) {
      console.error(
        "Error marking item as finished:",
        (error as Error).message
      );
    }
  };

  const handleTodo = async () => {
    try {
      const id = getItemId(roadmapItem);
      console.log(id);
      if (!id) {
        console.log(`Item ${roadmapItem} not found`);
        return;
      }

      const updatedData = {
        status: "todo",
      };

      await patchData(id, updatedData);
      console.log(`Item "${roadmapItem}" marked as todo`);
    } catch (error) {
      console.error(
        "Error marking item as finished:",
        (error as Error).message
      );
    }
  };

  const getItemId = (roadmapItem: string) => {
    const foundItem = roadmapStatus?.find((item: {_id:string, name: string, status:string}) => item.name === roadmapItem);
    return foundItem?._id;
  };

  const patchData = async (id: string, updatedData: {status: string}) => {
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
          <div className="flex gap-10 justify-center">
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
          <h2 className="text-xl font-bold mt-5">{roadmapItem.toUpperCase()}</h2>
          
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
