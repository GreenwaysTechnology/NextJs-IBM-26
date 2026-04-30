import Image from "next/image"

export default function ImagePage() {

    return <div>
        <Image src="/next.svg" alt="This is Next logo" height={100} width={100} />
        <Image src="/window.svg" alt="This is Next logo" height={100} width={100} />
    </div>
}