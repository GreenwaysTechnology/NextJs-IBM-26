import photos from "@/app/mock-data/photos"
import Frame from "@/app/components/frame"
import Modal from "@/app/components/modal"

export default async function PhotoModal({ params }) {
    const id = (await params).id 
    const photo = photos.find((p) => p.id == id)
    return (
        <Modal>
           <Frame photo={photo} />
        </Modal>
    )
}