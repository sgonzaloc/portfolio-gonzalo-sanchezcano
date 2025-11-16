import { useNavigate } from "react-router-dom";
import imgMeAvatar from "../../assets/me/avatar.png";

function AvatarHeader() {
  const navigate = useNavigate();
  return (
    <div className="transition-all duration-300 ease-in-out pt-2 pb-0">
      <div className="flex justify-center">
        {" "}
        <button onClick={() => navigate("/")}>
          <div className="flex items-center justify-center rounded-full transition-all duration-300 h-20 w-20 overflow-hidden">
            <div className="relative cursor-pointer h-20 w-20 overflow-hidden transition-all duration-300">
              <img
                alt="Avatar"
                width="200"
                height="200"
                className="h-full w-full object-cover object-[70%_30%] rounded-none"
                src={imgMeAvatar}
              />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default AvatarHeader;
