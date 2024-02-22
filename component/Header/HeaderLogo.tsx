import Link from "next/link";
import Image from "next/image";

export default function HeaderLogo() {
    return (
        <Link href={"/"}>
            <div className="flex-none w-24 md:w-28 grid cursor-pointer select-none">
                <Image src={"/firebase.svg"} width={100} height={40} objectFit="contain" />
            </div>
        </Link>
    );
}
