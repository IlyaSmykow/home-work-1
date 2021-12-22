import "./styles.css";


export const Article = () => {

    const id = window.location.pathname.split('/')[2];

    return (
        <div>
            {
                id ? <h1>Статья № {id}</h1> : null
            }
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae distinctio fuga animi
                aliquam sit id veritatis, doloribus ducimus quas, dignissimos non minima quia amet possimus?
                Impedit nemo ducimus fuga rem!
            </p>
            <a href="/"><button>Назад</button></a>
        </div>
    )
};