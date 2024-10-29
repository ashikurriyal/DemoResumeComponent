import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
} from "react-share";

const Section = () => {
  const shareURL = "https://career-canvas365.netlify.app/";
  return (
    <div className="mt-16">
      <div className="card card-side bg-base-100 shadow-xl border-2 border-black">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Demo card for sharing in social media</h2>
          <p>Click the button to share with social media</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Share
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Share With:</h3>
                <p className="py-4">
                  Choose Your Platforms where you want to share:
                </p>
                <div className="flex items-center gap-4">
                  <FacebookShareButton url={shareURL}>
                    <FacebookIcon size={40} round={true} />
                  </FacebookShareButton>
                  {/* <EmailShareButton url={shareURL}>
                  <EmailIcon size={40} round={true} />
                </EmailShareButton> */}
                  <LinkedinShareButton url={shareURL}>
                    <LinkedinIcon size={40} round={true} />
                  </LinkedinShareButton>
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
