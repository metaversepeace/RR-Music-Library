import GalleryItem from './GalleryItem'

interface Gallery {
    handleSearch: any;
}

function Gallery(props: any){

    const display = props.data.map((item: any, index: any) => {
        return (

            <GalleryItem item={item} key={index} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery
