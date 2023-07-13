interface IProps {
  roadmapItem: string;
}

function RoadmapPopup(roadmapItem): IProps {
  return (
    <>
      <dialog id="roadmapModel" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </>
  );
}
export default RoadmapPopup;
