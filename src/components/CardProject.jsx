
export function CardProject(props) {
    return (
        <aside className="flex flex-col lg:w-5/6 ms:w-full h-full 3xl:gap-8 lg:gap-5 ms:gap-5">
            <img
                src={props.frontCover}
                className="w-full h-full rounded-xl"
            />
            <div className="flex lg:flex-row ms:flex-col ms:gap-5 3xl:gap-10 lg:gap-5">
                <span className="flex flex-col text-xl font-semibold lg:gap-2 ms:gap-2">
                    {props.title}
                    <div className="flex flex-col gap-2 text-base">
                        <a href={props.repositorio} target="_blank" className="flex justify-center items-center py-2 px-8 border-2 border-gray-100 font-semibold hover:border-gray-300 transition-colors duration-300 3xl:text-base lg:text-sm">
                            Repositório
                        </a>
                        <a href={props.deploy} target="_blank" className="flex justify-center items-center py-2 px-8 border-2 border-gray-100 font-semibold hover:border-gray-300 transition-colors duration-300 3xl:text-base lg:text-sm">
                            Deploy
                        </a>
                    </div>
                </span>
                <span className="text-gray-300 2xl:text-base ms:text-sm lg:text-xs xl:text-sm text-justify">
                    {props.subTitle}
                </span>
            </div>
        </aside>
    )
}