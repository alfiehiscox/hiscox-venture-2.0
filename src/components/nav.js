import React from 'react';

const Navbar = () => {
    return (
        <navbar className="h-20 font-quicksand justify-items-center flex p-3">
            <Logo text="hv."></Logo>
            <ul class="flex justify-end w-full mr-6">
                <li class="flex justify-center items-center mr-7">
                    <a class="text-blue-500 hover:text-blue-800" href="#">Active</a>
                </li>
                <li class="flex justify-center items-center mr-7">
                    <a class="text-blue-500 hover:text-blue-800" href="#">Link</a>
                </li>
                <li class="flex justify-center items-center mr-7">
                    <a class="text-blue-500 hover:text-blue-800" href="#">Link</a>
                </li>
            </ul>
        </navbar>
    )
}

const Logo = (props) => {
    return <h3 className="text-white w-20 flex justify-center items-center text-lg font-quicksand">{props.text}</h3>
}

export default Navbar