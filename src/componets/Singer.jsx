import { useEffect } from 'react';
import '../assets/bootstrap.min.js';
import '../assets/jquery-3.7.1.min.js';
import '../assets/popper.min.js';
import '../assets/main.js';
import MenuIcon from "./icons/MenuIcon";
import HouseIcon from "./icons/HouseIcon";
import PatternedRectangle from "./icons/PatternedRectangle"
import MobilarioIcon from "./icons/MobilarioIcon";
import CotillonIcon from "./icons/cotillon";
import CateringIcon from "./icons/Catering";
import CantanteIcon from "./icons/CantanteIcon";
import AnimadoresIcon from "./icons/AnimadoresIcon";
import ClownsIcon from "./icons/ClownsIcon";
import DjsIcon from "./icons/DjsIcon";
import SingerComponents from './views/SingerComponents.jsx';
import { Link } from 'react-router-dom';

const Singer = () => {

    useEffect(() => {
        "use strict";

        var fullHeight = function () {
            document.querySelectorAll('.js-fullheight').forEach(function (element) {
                element.style.height = window.innerHeight + 'px';
            });
            window.addEventListener('resize', function () {
                document.querySelectorAll('.js-fullheight').forEach(function (element) {
                    element.style.height = window.innerHeight + 'px';
                });
            });
        };
        fullHeight();

        var sidebarCollapseHandler = function () {
            document.getElementById('sidebar').classList.toggle('active');
        };
        document.getElementById('sidebarCollapse').addEventListener('click', sidebarCollapseHandler);

        // Cleanup function
        return () => {
            window.removeEventListener('resize', fullHeight);
            document.getElementById('sidebarCollapse').removeEventListener('click', sidebarCollapseHandler);
        };
    }, []);

    return (

        <div className="wrapper d-flex align-items-stretch">
            <nav id="sidebar" className="active">
                <div className="custom-menu" >
                    <button type="button" id="sidebarCollapse" className="btn">
                        <MenuIcon />

                        <span className="sr-only">Toggle Menu</span>
                    </button>
                </div>
                <div className="p-4">
                    <div className="row mt-4">
                        <img
                            className="img-fluid rounded-circle imagen-con-borde"
                            src="https://s3-alpha-sig.figma.com/img/bcef/d08c/f3da9d0a8971ffddebf26c1714114284?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gERqLXqPW9-v5mPQWM4Hi7JgYv9pfN3pY9OtAA6u~sT0ToUwPL~ALYRfwAU-U9O9Q-qj5GLIarstP36yA-iCel~xMCjNTZjQaQcgjQnz8UpjpPUniiWjLV8e9sMO5GfWhcSciF03dx4bFfEZPCdFWpj4ZnmRrhEMoDDThyjhN~dq8I3Z7jviTIDGz91EWrHdY1o9JtBPQI8XjIkG41vcbkIwAYgKRNyVE0~DxcAxfYLrZio50ZH4CzBy4f47-g6FguiFMOgNSovmX-bw4lYeck7MMGrt2-fjz~im6zw1GDx4N0uwdxkIbY71Xz~V0lUFHoV8dGd3cy2rNx4K5Dxb0g__"
                            alt=""
                        />
                    </div>

                    <div className="row mt-2">
                        <h1 className="title-usuario">Justin Campos</h1>
                    </div>
                    <div className="row">
                        <p className="text-muted">Ver perfil</p>
                    </div>
                    <ul className="list-unstyled components">
                        <li className="active">
                            <Link to="/"><span className="fa fa-home mr-3"></span>
                                <HouseIcon /> Home</Link>
                        </li>
                    </ul>
                    <ul className="list-unstyled components">
                        <h6 className="title-list">Alquiler</h6>
                        <li>
                            <Link to="/salones"><span className="fa fa-user mr-3"></span>
                                <PatternedRectangle /> Salones</Link>
                        </li>
                        <li>
                            <Link to="#"><span className="fa fa-briefcase mr-3"></span>
                                <MobilarioIcon /> Mobilario</Link>
                        </li>
                    </ul>
                    <ul className="list-unstyled components">
                        <h6 className="title-list">Servicios</h6>
                        <li>
                            <Link to="#"><span className="fa fa-sticky-note mr-3"></span>
                                <CotillonIcon /> Cotillon</Link>
                        </li>
                        <li>
                            <Link to="#"><span className="fa fa-paper-plane mr-3"></span>
                                <CateringIcon /> Catering</Link>
                        </li>
                    </ul>
                    <ul className="list-unstyled components">
                        <h6 className="title-list">

                            Contrataciones</h6>
                        <li>
                            <Link to="/cantante"><span className="fa fa-sticky-note mr-3"></span>
                                <CantanteIcon /> Cantantes</Link>
                        </li>
                        <li>
                            <Link to="/presentador"><span className="fa fa-paper-plane mr-3"></span>
                                <AnimadoresIcon />Animadores</Link>
                        </li>
                        <li>
                            <Link to="/payaso"><span className="fa fa-sticky-note mr-3"></span>
                                <ClownsIcon /> Clowns</Link>
                        </li>
                        <li>
                            <Link to="/djs"><span className="fa fa-paper-plane mr-3"></span>
                                <DjsIcon /> DJ´S</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="container mt-3">
                <div className="row">
                    <div className="col-2">
                    </div>
                    <div className="col-8 mx-auto">
                        <div className="input-group">
                            <input className="form-control border-end-0 border rounded-pill" type="search" value="search" id="example-search-input" />
                        </div>
                    </div>
                    <div className="col-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_322_183)">
                                <path d="M22 9H17.21L12.83 2.44C12.64 2.16 12.32 2.02 12 2.02C11.68 2.02 11.36 2.16 11.17 2.45L6.79 9H2C1.45 9 1 9.45 1 10C1 10.09 1.01 10.18 1.04 10.27L3.58 19.54C3.81 20.38 4.58 21 5.5 21H18.5C19.42 21 20.19 20.38 20.43 19.54L22.97 10.27L23 10C23 9.45 22.55 9 22 9ZM12 4.8L14.8 9H9.2L12 4.8ZM18.5 19L5.51 19.01L3.31 11H20.7L18.5 19ZM12 13C10.9 13 10 13.9 10 15C10 16.1 10.9 17 12 17C13.1 17 14 16.1 14 15C14 13.9 13.1 13 12 13Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_322_183">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
                <SingerComponents />
            </div>



        </div>


    );
};

export default Singer;
