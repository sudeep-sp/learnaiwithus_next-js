

const Article = async ({ params }: { params: { id: string } }) => {
    const {id} = await params;
    return <div>Id: {id}</div>
}

export default Article