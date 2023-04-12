import { LinkedinLogo, GithubLogo, Envelope, Phone, ArrowRight, ArrowLeft, DeviceMobile } from "phosphor-react"
import Macbook from "../assets/macbook.png"
import Profile from "../assets/profile.png"
import JavaScriptLogo from "../assets/javascript.png"
import TypeScriptLogo from "../assets/typescript.png"
import HtmlLogo from "../assets/html.png"
import CssLogo from "../assets/css.png"
import GitLogo from "../assets/git.png"
import ReactLogo from "../assets/react.png"
import MegaMovies from "../assets/mega_movies.png"
import CiclosDeMercado from "../assets/ciclos_de_mercado.png"
import ListaDePresença from "../assets/lista_de_presença.png"
import wiseUp from "../assets/wise_up.png"
import Whatsapp from "../assets/whatsapp.png"
import Email from "../assets/email.png"
import GitHub from "../assets/gitHub.png"
import Linkedin from "../assets/linkedin.png"
import { CardProject } from "../components/CardProject"
import { Navigation, EffectCoverflow, Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import "swiper/css/effect-creative";
import 'swiper/css/autoplay';
import { CardTecnologies } from "../components/CardsTecnologies"

export function Home() {

    return (
        <aside className="flex flex-col min-h-screen">
            <header id="home" className="flex max-h-max bg-blue-500 bg-[url('/src/assets/bg_home.png')] bg-blend-multiply">
                <section className="flex flex-col pt-5 w-full items-center h-full bg-gradient-to-t from-black via-transparent to-black">
                    <div className="flex ms:w-11/12 2xl:w-4/6 lg:w-10/12 xl:w-9/12 h-max justify-between pb-14">
                        <div className="flex gap-1">
                            <a href="https://www.linkedin.com/in/viniciusluzz/" target="_blank" className="p-2 rounded-full bg-blue-500 hover:-translate-y-1 hover:scale-110 active:translate-y-0 active:scale-75 duration-500">
                                <div className="lg:flex ms:hidden">
                                    <LinkedinLogo size={32} />
                                </div>
                                <div className="lg:hidden ms:flex">
                                    <LinkedinLogo size={20} />
                                </div>
                            </a>
                            <a href="https://github.com/viniciusluzz" target="_blank" className="p-2 rounded-full bg-blue-500 hover:-translate-y-1 hover:scale-110 active:translate-y-0 active:scale-75 duration-500">
                                <div className="lg:flex ms:hidden">
                                    <GithubLogo size={32} />
                                </div>
                                <div className="lg:hidden ms:flex">
                                    <GithubLogo size={20} />
                                </div>
                            </a>
                            <a href="mailto:viniciusvintee9@gmail.com" className="p-2 rounded-full bg-blue-500 hover:-translate-y-1 hover:scale-110 active:translate-y-0 active:scale-75 duration-500">
                                <div className="lg:flex ms:hidden">
                                    <Envelope size={32} />
                                </div>
                                <div className="lg:hidden ms:flex">
                                    <Envelope size={20} />
                                </div>
                            </a>
                        </div>
                        <div className="flex lg:gap-5 ms:gap-1 items-center">
                            <span className="flex gap-1">
                                <span className="p-2 rounded-full bg-blue-500">
                                    <div className="lg:flex ms:hidden">
                                        <Phone size={32} />
                                    </div>
                                    <div className="lg:hidden ms:flex">
                                        <Phone size={20} />
                                    </div>
                                </span>
                                <span className="lg:flex ms:hidden flex-col text-sm justify-center leading-4">
                                    TELEFONE DE
                                    <span>CONTATO</span>
                                </span>
                            </span>
                            <span id="span" className="lg:text-3xl ms:text-base -tracking-wider">
                                91 98911 9372
                            </span>
                        </div>
                    </div>
                    <div className="lg:flex ms:hidden 2xl:w-3/6 xl:w-7/12 lg:8/12 max-h-max justify-between items-center">
                        <a href="#home" className="text-2xl font-semibold group/home hover:cursor-pointer hover:text-gray-200 transition-colors lg:text-xl">
                            Home
                            <span className="flex w-0 h-[2px] bg-blue-500 group-hover/home:animate-animateBorder "></span>
                        </a>
                        <a href="#about" className="text-2xl font-semibold group/about hover:cursor-pointer hover:text-gray-200 transition-colors lg:text-xl">
                            Sobre mim
                            <span className="flex w-0 h-[2px] bg-blue-500 group-hover/about:animate-animateBorder "></span>
                        </a>
                        <span className="flex flex-col items-center">
                            <img
                                src={Profile}
                                className="w-32 h-32 rounded-full" />
                            <span className="text-5xl font-semibold lg:text-4xl">
                                Vinícius Luz
                            </span>
                            <span className="text-blue-500 font-bold text-lg">
                                FRONT-END DEVELOPER
                            </span>
                        </span>
                        <a href="#works" className="text-2xl font-semibold group/works hover:cursor-pointer hover:text-gray-200 transition-colors lg:text-xl">
                            Portfólio
                            <span className="flex w-0 h-[2px] bg-blue-500 group-hover/works:animate-animateBorder"></span>
                        </a>
                        <a href="#talk" className="text-2xl font-semibold group/talk hover:cursor-pointer hover:text-gray-200 transition-colors lg:text-xl">
                            Fale comigo
                            <span className="flex w-0 h-[2px] bg-blue-500 group-hover/talk:animate-animateBorder"></span>
                        </a>
                    </div>
                    <div className="ms:flex lg:hidden flex-col ms:w-10/12 max-h-max justify-between items-center gap-5">
                        <span className="flex flex-col items-center">
                            <img
                                src={Profile}
                                className="w-32 h-32 rounded-full" />
                            <span className="text-4xl font-semibold">
                                Vinícius Luz
                            </span>
                            <span className="text-blue-500 font-bold lg:text-lg ms:text-base">
                                FRONT-END DEVELOPER
                            </span>
                        </span>
                        <span className="flex gap-2">
                            <a href="#home" className="text-base font-semibold group/home hover:cursor-pointer hover:text-gray-200 transition-colors text-center">
                                Home
                                <span className="flex w-0 h-[2px] bg-blue-500 group-hover/home:animate-animateBorder "></span>
                            </a>
                            <a href="#about" className="text-base font-semibold group/about hover:cursor-pointer hover:text-gray-200 transition-colors text-center">
                                Sobre mim
                                <span className="flex w-0 h-[2px] bg-blue-500 group-hover/about:animate-animateBorder "></span>
                            </a>
                            <a href="#works" className="text-base font-semibold group/works hover:cursor-pointer hover:text-gray-200 transition-colors text-center">
                                Portfólio
                                <span className="flex w-0 h-[2px] bg-blue-500 group-hover/works:animate-animateBorder"></span>
                            </a>
                            <a href="#talk" className="text-base font-semibold group/talk hover:cursor-pointer hover:text-gray-200 transition-colors text-center">
                                Fale comigo
                                <span className="flex w-0 h-[2px] bg-blue-500 group-hover/talk:animate-animateBorder"></span>
                            </a>
                        </span>
                    </div>
                    <div className="flex max-h-max justify-center lg:w-5/12 ms:w-10/12">
                        <img
                            src={Macbook}
                            className="flex animate-macbook delay-[2000ms]" />
                    </div>
                </section>
            </header>
            <main className="flex flex-col max-h-max">
                <section className="flex flex-col items-center justify-center gap-10 bg-black ms:pt-3 ms:pb-12 lg:pt-10 lg:pb-20">
                    <div id="about" className="flex items-center justify-center gap-10">
                        <img
                            src={Profile}
                            className="lg:flex ms:hidden w-52 h-52 rounded-full lg:w-44 lg:h-44" />
                        <span className="justify-center lg:text-base ms:text-sm text-gray-200 lg:w-6/12 2xl:w-5/12 ms:w-10/12 text-justify">
                            <span className="lg:text-5xl ms:text-4xl text-blue-500 font-semibold">Olá, </span>
                            me chamo Vinícius Luz Nunes. Possuo soft-skills como: resiliência, comunicação assertiva e trabalho em equipe. Faço curso de tecnologia da Rocketseat, tenho sólido conhecimento em HTML, CSS, JavaScript, TypeScript e React.js. Sou resiliente, tenho a certeza que no mercado de tecnologia é essencial estar evoluindo sempre. Atualmente, atuo como desenvolvedor freelancer, mas busco uma oportunidade para me inserir no mercado de tecnologia como um Desenvolvedor Front-End.
                        </span>
                    </div>
                    <span id="tecnologies" className="flex text-gray-200 lg:text-base ms:text-sm">
                        MINHAS SKILLS E POWER UP’S
                    </span>
                </section>
                <section className="relative lg:py-32 ms:py-10 flex justify-center max-h-max bg-gray-100">
                    <div className="absolute flex ms:w-11/12 2xl:w-4/6 lg:w-10/12 xl:w-9/12 justify-between lg:gap-2 ms:gap-1 lg:-top-14 ms:-top-7 text-gray-400 lg:text-sm ms:text-[7px]">
                        <span className="flex flex-col gap-1 items-center font-semibold">
                            <img
                                src={HtmlLogo}
                                className="lg:w-28 lg:h-28 ms:w-12 ms:h-12 drop-shadow-xl" />
                            HTML
                        </span>
                        <span className="flex flex-col gap-1 items-center font-semibold">
                            <img
                                src={CssLogo}
                                className="lg:w-28 lg:h-28 ms:w-12 ms:h-12 drop-shadow-xl" />
                            CSS
                        </span>
                        <span className="flex flex-col gap-1 items-center font-semibold">
                            <img
                                src={JavaScriptLogo}
                                className="lg:w-28 lg:h-28 ms:w-12 ms:h-12 drop-shadow-xl" />
                            JAVASCRIPT
                        </span>
                        <span className="flex flex-col gap-1 items-center font-semibold">
                            <img
                                src={TypeScriptLogo}
                                className="lg:w-28 lg:h-28 ms:w-12 ms:h-12 drop-shadow-xl" />
                            TYPESCRIPT
                        </span>
                        <span className="flex flex-col gap-1 items-center font-semibold">
                            <img
                                src={ReactLogo}
                                className="lg:w-28 lg:h-28 ms:w-12 ms:h-12 drop-shadow-xl" />
                            REACT.JS
                        </span>
                        <span className="flex flex-col gap-1 items-center font-semibold">
                            <img
                                src={GitLogo}
                                className="lg:w-28 lg:h-28 ms:w-12 ms:h-12 drop-shadow-xl" />
                            GIT
                        </span>
                    </div>
                    <div className="relative flex ms:w-10/12 2xl:w-7/12 lg:w-9/12 xl:w-8/12 mt-12 max-h-max bg-gray-50 drop-shadow-2xl rounded-2xl overflow-hidden">
                        <Swiper
                            spaceBetween={30}
                            grabCursor={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination, Autoplay]}
                            autoplay={true}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <CardTecnologies
                                    title="HTML"
                                    subTitle="HTML (abreviação de Hypertext Markup Language) é uma linguagem de marcação utilizada na estruturação de páginas web."
                                    src={HtmlLogo}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CardTecnologies
                                    title="CSS"
                                    subTitle="CSS é uma linguagem de estilo. Utilizo para personalização visual do site. Ou seja, ela serve para otimizar o conteúdo das páginas e permitir uma apresentação mais amigável para o usuário."
                                    src={CssLogo}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CardTecnologies
                                    title="JAVASCRIPT"
                                    subTitle="Utilizo o JavaScript para criar aplicações com comportamento interativo e complexo."
                                    src={JavaScriptLogo}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CardTecnologies
                                    title="TYPESCRIPT"
                                    subTitle="O TypeScript é uma extensão do JavaScript. Ela adiciona recursos avançados ao JavaScript, como a tipagem estática e interfaces, tornando mais fácil detectar e prevenir erros durante a fase de desenvolvimento."
                                    src={TypeScriptLogo}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CardTecnologies
                                    title="REACT.JS"
                                    subTitle="O React é a biblioteca mais popular do JavaScript e eu utilizo para construir interfaces de usuário. Ela oferece uma resposta excelente, proporcionando mais interatividade e desempenho a aplicação."
                                    src={ReactLogo}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CardTecnologies
                                    title="GIT"
                                    subTitle="Utilizo o Git como programa de controle de versão das minhas aplicações."
                                    src={GitLogo}
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
                <section className="flex flex-col max-h-max items-end pt-16 pb-10 lg:gap-20 ms:gap-8 bg-black">
                    <span id="works" className="flex flex-col ms:w-full lg:w-10/12 ms:px-8 lg:pl-0 font-semibold lg:text-5xl ms:text-4xl">
                        Portfólio
                        <span className="text-gray-300 font-normal 3xl:text-2xl lg:text-lg ms:text-sm">
                            Conheça as soluções criadas e desenvolvidas por mim.
                        </span>
                    </span>
                    <div className="flex w-full h-full">
                        <div className="ms:hidden lg:flex relative flex w-full h-full items-end overflow-hidden">
                            <Swiper
                                effect={'coverflow'}
                                grabCursor={true}
                                centeredSlides={true}
                                loop={true}
                                slidesPerView={1.5}
                                coverflowEffect={{
                                    rotate: 0,
                                    stretch: 1.5,
                                    depth: 100,
                                    modifier: 3,
                                }}
                                modules={[EffectCoverflow, Navigation]}
                                navigation={{
                                    nextEl: '#swiper-button-next',
                                    prevEl: '#swiper-button-prev',
                                    clickable: true,
                                }}
                                className="swiper-container"
                            >
                                <SwiperSlide className="3xl:w-10/12 3xl:h-[700px] lg:w-10/12 lg:h-full">
                                    <CardProject
                                        frontCover={MegaMovies}
                                        title="MEGA MOVIES"
                                        subTitle="A plataforma de stream de vídeos Mega Movies foi pensada como forma de praticar meus conhecimentos nos fundamentos do React. Tentei ao máximo aplicar a esta uma interface moderna e um design interesante, como é de prática em pltaformas de vídeo famosas como a Netflix, HBO Max, etc. Neste projeto utilizei as seguintes tecnologias: HTML (Linguagem de marcação), Tailwindcss (Framework css usado para estilização), React Router Dom (Utilizado para criação de rotas na aplicação), TypeScript e React."
                                        repositorio="https://github.com/viniciusluzz/MegaMovies"
                                        deploy="https://megamovies-beryl.vercel.app/"
                                    />
                                </SwiperSlide>
                                <SwiperSlide className="3xl:w-10/12 3xl:h-[700px] lg:w-10/12 lg:h-full">
                                    <CardProject
                                        frontCover={wiseUp}
                                        title="PÁGINA DE LOGIN"
                                        subTitle="Meu intuito neste trabalho, foi desenvolver o site, de modo que chegue ao mais próximo possível da página de login original, em termos de aparência e funcionalidades. Para isto ser possível, utilizei o FIREBASE AUTHENTICATION para: Página de criação de usuário; Página de login; Recuperação de senha e Login com Google e Facebook."
                                        repositorio="https://github.com/viniciusluzz/WiseUpOnlineClone"
                                        deploy="http://wise-up-online-clone.vercel.app/"
                                    />
                                </SwiperSlide>
                                <SwiperSlide className="3xl:w-10/12 3xl:h-[700px] lg:w-10/12 lg:h-full">
                                    <CardProject
                                        frontCover={ListaDePresença}
                                        title="LISTA DE PRESENÇA"
                                        subTitle="Esta aplicação servirá como uma ferramenta para, por exemplo, um professor utilizar em sala de aula como uma lista de presença. Funcionalmente o usuário entra com o nome dos presentes no evento no campo “inserir nome”, e, em seguida, pressiona o botão confirmar, após isto, surgirá um campo com o nome digitado e o horário de confirmação. Com este projeto foi possível praticar conceitos importantes do React como: Componentes, Hooks, propriedades, etc."
                                        repositorio="https://github.com/viniciusluzz/listaDePresen-a"
                                        deploy="http://lista-de-presen-a-coral.vercel.app/"
                                    />
                                </SwiperSlide>
                                <SwiperSlide className="3xl:w-10/12 3xl:h-[700px] lg:w-10/12 lg:h-full">
                                    <CardProject
                                        frontCover={CiclosDeMercado}
                                        title="LANDING PAGE"
                                        subTitle="Projeto de landing page. Trata-se de um clone da página de vendas do cuso: Ciclos de Mercado do Fernando Ulrich. Fiz Com o intuito de praticar meus conhecimentos e de rechear ainda mais meu portfólio."
                                        repositorio="https://github.com/viniciusluzz/LaddingPageCiclosDeMercadoClone"
                                        deploy="https://ladding-page-ciclos-de-mercado-clone.vercel.app/"
                                    />
                                </SwiperSlide>

                                <div className="flex w-full h-full justify-center items-center gap-10 mt-5">
                                    <div id="swiper-button-prev" className="flex justify-center items-center">
                                        <button className="flex justify-center items-center gap-1 p-4 rounded-full bg-gray-800 hover:-translate-y-1 hover:scale-110 active:translate-y-0 active:scale-75 duration-500 hover:bg-gray-400">
                                            <ArrowLeft
                                                size={28}
                                                onClick={() => soma()}
                                            />
                                            Back
                                        </button>
                                    </div>
                                    <div id="swiper-button-next" className="flex justify-center items-center">
                                        <button className="flex justify-center items-center gap-1 p-4 rounded-full bg-gray-800 hover:-translate-y-1 hover:scale-110 active:translate-y-0 active:scale-75 duration-500 hover:bg-gray-400">
                                            Next
                                            <ArrowRight
                                                size={28}
                                                onClick={() => soma()}
                                            />
                                        </button>
                                    </div>
                                </div>
                            </Swiper>
                        </div>
                        <div className="ms:flex lg:hidden relative flex w-full h-full items-end overflow-hidden">
                            <Swiper
                                effect={'coverflow'}
                                grabCursor={true}
                                centeredSlides={true}
                                loop={true}
                                slidesPerView={1}
                                coverflowEffect={{
                                    rotate: 0,
                                    stretch: 1.5,
                                    depth: 0,
                                    modifier: 3,
                                }}
                                modules={[EffectCoverflow, Navigation]}
                                navigation={{
                                    nextEl: '#swiper-button-next',
                                    prevEl: '#swiper-button-prev',
                                    clickable: true,
                                }}
                                className="swiper-container"
                            >
                                <SwiperSlide className="ms:w-full ms:h-full ms:px-8">
                                    <CardProject
                                        frontCover={MegaMovies}
                                        title="MEGA MOVIES"
                                        subTitle="A plataforma de stream de vídeos Mega Movies foi pensada como forma de praticar meus conhecimentos nos fundamentos do React. Neste projeto utilizei as seguintes tecnologias: HTML (Linguagem de marcação), Tailwindcss (Framework css usado para estilização), React Router Dom (Utilizado para criação de rotas na aplicação), TypeScript e React."
                                        repositorio="https://github.com/viniciusluzz/MegaMovies"
                                        deploy="https://megamovies-beryl.vercel.app/"
                                    />
                                </SwiperSlide>
                                <SwiperSlide className="ms:w-full ms:h-full ms:px-8">
                                    <CardProject
                                        frontCover={wiseUp}
                                        title="PÁGINA DE LOGIN"
                                        subTitle="Meu intuito neste trabalho, foi desenvolver o site, de modo que chegue ao mais próximo possível da página de login original, em termos de aparência e funcionalidades. Para isto ser possível, utilizei o FIREBASE AUTHENTICATION para: Página de criação de usuário; Página de login; Recuperação de senha e Login com Google e Facebook."
                                        repositorio="https://github.com/viniciusluzz/WiseUpOnlineClone"
                                        deploy="http://wise-up-online-clone.vercel.app/"
                                    />
                                </SwiperSlide>
                                <SwiperSlide className="ms:w-full ms:h-full ms:px-8">
                                    <CardProject
                                        frontCover={ListaDePresença}
                                        title="LISTA DE PRESENÇA"
                                        subTitle="Esta aplicação servirá como uma ferramenta para, por exemplo, um professor utilizar em sala de aula como uma lista de presença. Funcionalmente o usuário entra com o nome dos presentes no evento no campo “inserir nome”, e, em seguida, pressiona o botão confirmar, após isto, surgirá um campo com o nome digitado e o horário de confirmação. Com este projeto foi possível praticar conceitos importantes do React como: Componentes, Hooks, propriedades, etc."
                                        repositorio="https://github.com/viniciusluzz/listaDePresen-a"
                                        deploy="http://lista-de-presen-a-coral.vercel.app/"
                                    />
                                </SwiperSlide>
                                <SwiperSlide className="ms:w-full ms:h-full ms:px-8">
                                    <CardProject
                                        frontCover={CiclosDeMercado}
                                        title="LANDING PAGE"
                                        subTitle="Projeto de landing page. Trata-se de um clone da página de vendas do cuso: Ciclos de Mercado do Fernando Ulrich. Fiz Com o intuito de praticar meus conhecimentos e de rechear ainda mais meu portfólio."
                                        repositorio="https://github.com/viniciusluzz/LaddingPageCiclosDeMercadoClone"
                                        deploy="https://ladding-page-ciclos-de-mercado-clone.vercel.app/"
                                    />
                                </SwiperSlide>

                                <div className="flex w-full h-full justify-center items-center gap-10 mt-5">
                                    <div id="swiper-button-prev" className="flex justify-center items-center">
                                        <button className="flex justify-center items-center gap-1 p-4 rounded-full bg-gray-800 hover:-translate-y-1 hover:scale-110 active:translate-y-0 active:scale-75 duration-500 hover:bg-gray-400">
                                            <ArrowLeft
                                                size={28}
                                                onClick={() => soma()}
                                            />
                                            Back
                                        </button>
                                    </div>
                                    <div id="swiper-button-next" className="flex justify-center items-center">
                                        <button className="flex justify-center items-center gap-1 p-4 rounded-full bg-gray-800 hover:-translate-y-1 hover:scale-110 active:translate-y-0 active:scale-75 duration-500 hover:bg-gray-400">
                                            Next
                                            <ArrowRight
                                                size={28}
                                                onClick={() => soma()}
                                            />
                                        </button>
                                    </div>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </section>
            </main>
            <footer id="talk" className="flex max-h-max bg-blue-500 bg-[url('/src/assets/bg_home.png')] bg-blend-multiply">
                <section className="flex flex-col gap-3 py-20 w-full h-full items-center bg-gradient-to-t from-black via-transparent to-black">
                    <div className="flex flex-col lg:items-center ms:w-10/12 h-full gap-1" >
                        <span className="flex font-semibold lg:text-5xl ms:text-4xl lg:justify-center">
                            Fale Comigo
                        </span>
                        <span className="flex ms:w-full lg:w-5/12 lg:justify-center 3xl:text-2xl lg:text-lg ms:text-sm text-gray-300 lg:text-center">
                            Resta alguma dúvida? Entre em contato comigo por alguma rede de contato.
                        </span>
                    </div>
                    <div className="flex lg:flex-row ms:flex-col ms:items-center lg:items-stretch ms:w-10/12 xl:w-7/12 2xl:w-3/6 lg:w-2/3 lg:pt-16 ms:pt-8 pb-5 gap-5 justify-between">
                        <span className="flex min-w-fit">
                            <span className="flex flex-col items-center">
                                <img
                                    src={Profile}
                                    className="w-24 h-24 rounded-full"
                                />
                                <span className="text-3xl font-semibold">
                                    Vinícius Luz
                                </span>
                                <span className="text-blue-500 font-bold text-xs">
                                    FRONT-END DEVELOPER
                                </span>
                            </span>
                        </span>
                        <div className="flex lg:min-w-fit ms:full">
                            <div className="flex flex-col lg:gap-0 ms:gap-5 ms:w-full">
                                <span className="flex lg:gap-5 ms:gap-2 lg:h-20 lg:min-h-max items-center">
                                    <div className="flex items-center gap-2">
                                        <span className="flex items-center justify-center lg:w-14 lg:h-14 ms:w-10 ms:h-10 rounded-full bg-gray-50 text-blue-500">
                                            <span className="lg:flex ms:hidden">
                                                <Phone size={32} />
                                            </span>
                                            <span className="lg:hidden ms:flex">
                                                <Phone size={20} />
                                            </span>
                                        </span>
                                        <span className="flex flex-col leading-4 lg:flex ms:hidden text-gray-300 ">
                                            TELEFONE DE
                                            <span>CONTATO:</span>
                                        </span>
                                    </div>
                                    <span className="3xl:text-3xl 2xl:text-2xl lg:text-xl ms:text-xl -tracking-wider font-semibold ">
                                        91 98911 9372
                                    </span>
                                </span>
                                <span className="flex lg:gap-5 ms:gap-2 lg:h-20 lg:min-h-max items-center">
                                    <div className="flex items-center gap-2">
                                        <span className="flex items-center justify-center lg:w-14 lg:h-14 ms:w-10 ms:h-10 rounded-full bg-gray-50 text-blue-500">
                                            <span className="lg:flex ms:hidden">
                                                <Envelope size={32} />
                                            </span>
                                            <span className="lg:hidden ms:flex">
                                                <Envelope size={20} />
                                            </span>
                                        </span>
                                        <span className="flex flex-col leading-4 lg:flex ms:hidden text-gray-300 ">
                                            E-MAIL:
                                        </span>
                                    </div>
                                    <span className="3xl:text-3xl 2xl:text-2xl lg:text-xl -tracking-wider font-semibold">
                                        viniciusvintee9@gmail.com
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex lg:mt-10 ms:mt-5 xl:w-7/12 2xl:w-3/6 lg:w-2/3 ms:w-10/12 justify-between items-center">
                        <span className="flex gap-5 h-20 items-center lg:flex ms:hidden">
                            <div className="flex items-center gap-2">
                                <span className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-50 text-blue-500">
                                    <DeviceMobile size={32} />
                                </span>
                                <span className="flex flex-col text-lg leading-4 text-gray-300 ">
                                    REDES
                                    <span>SOCIAIS:</span>
                                </span>
                            </div>
                        </span>
                        <a href="https://www.linkedin.com/in/viniciusluzz/" target="_blank" className="flex flex-col gap-1 lg:text-base ms:text-xs items-center font-semibold hover:-translate-y-1 hover:scale-110 active:translate-y-0 active:scale-75 duration-500 cursor-pointer">
                            <img
                                src={Linkedin}
                                className="3xl:w-28 3xl:h-28 lg:w-20 lg:h-20 ms:w-16 ms:h-16 drop-shadow-xl lg:rounded-3xl ms:rounded-2xl" />
                            Linkedin
                        </a>
                        <a href="https://github.com/viniciusluzz" target="_blank" className="flex flex-col gap-1 lg:text-base ms:text-xs items-center font-semibold hover:-translate-y-1 hover:scale-110 active:translate-y-0 active:scale-75 duration-500 cursor-pointer">
                            <img
                                src={GitHub}
                                className="3xl:w-28 3xl:h-28 lg:w-20 lg:h-20 ms:w-16 ms:h-16 drop-shadow-xl lg:rounded-3xl ms:rounded-2xl font-semibold" />
                            GitHub
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=5591989119372&text=Ol%C3%A1,%20tudo%20bom?" target="_blank" className="flex flex-col gap-1 lg:text-base ms:text-xs items-center font-semibold hover:-translate-y-1 hover:scale-110 active:translate-y-0 active:scale-75 duration-500 cursor-pointer">
                            <img
                                src={Whatsapp}
                                className="3xl:w-28 3xl:h-28 lg:w-20 lg:h-20 ms:w-16 ms:h-16 drop-shadow-xl lg:rounded-3xl ms:rounded-2xl" />
                            WhatsApp
                        </a>
                        <a href="mailto:viniciusvintee9@gmail.com" target="_blank" className="flex flex-col gap-1 lg:text-base ms:text-xs items-center font-semibold hover:-translate-y-1 hover:scale-110 active:translate-y-0 active:scale-75 duration-500 cursor-pointer">
                            <img
                                src={Email}
                                className="3xl:w-28 3xl:h-28 lg:w-20 lg:h-20 ms:w-16 ms:h-16 drop-shadow-xl lg:rounded-3xl ms:rounded-2xl" />
                            E-mail
                        </a>
                    </div>
                </section>
            </footer>
        </aside>
    )
}