import { FaRegUser } from "react-icons/fa";

export default function UserToggler({ onClick }: { onClick: () => void }) {
    return (
        <div
            className="w-9 h-9 grid place-items-center bg-gray-100 ring-2 ring-transparent rounded-full shadow-sm overflow-hidden cursor-pointer select-none hover:ring-blue-500"
            onClick={onClick}
        >
            <FaRegUser />
        </div>
    );
}
