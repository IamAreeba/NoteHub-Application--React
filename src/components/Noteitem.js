


const Noteitem = (props) => {
    const { note } = props

    return (
        <>
            <div className='col-md-3'>
                {/* {note.title}
                {note.description} */}


                <div class="card my-3">
                    <div class="card-body">
                        <h5 class="card-title">{note.title}</h5>
                        <p class="card-text">{note.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab cumque porro! Blanditiis, consectetur quam.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Noteitem
