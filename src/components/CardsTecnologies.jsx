
export function CardTecnologies(props) {
    return (
        <aside className="flex lg:flex-row ms:flex-col justify-center gap-5 lg:px-20 lg:py-16 ms:px-5 ms:py-10 items-center w-full h-full bg-gray-50">
            <img
                src={props.src}
                className="lg:w-44 lg:h-44 ms:w-32 ms:h-32" />
            <span className="flex flex-col gap-2 3xl:text-xl text-gray-400 lg:text-base ms:text-sm text-justify">
                <strong className="text-black lg:text-3xl ms:text-lg">
                    {props.title}
                </strong>
                {props.subTitle}
            </span>
        </aside>
    )
}