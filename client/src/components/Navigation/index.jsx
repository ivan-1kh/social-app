import React from "react";
import "./style.css";
import path from "path";
import { Link } from "react-router-dom";
import UserImage from "../UserImage";
import graphics from "../../graphics/icons";

export default (props) => {
    return (
        <div className='navContainer'>
            <Link to='/'>
                <svg viewBox='0 0 24 24' fill='black' className='navIcon'>
                    <path d={window.location.pathname === "/" ? graphics.home_filled : graphics.home_outlined} />
                </svg>
            </Link>
            <Link to='/search'>
                <svg
                    viewBox={window.location.pathname === "/search" ? "0 0 48 48" : "0 0 24 24"}
                    fill='black'
                    className='navIcon'
                >
                    <path
                        d={window.location.pathname === "/search" ? graphics.search_inverted : graphics.search_outlined}
                    />
                </svg>
            </Link>
            <Link to='/createpost'>
                <svg viewBox='0 0 24 24' fill='black' className='navIcon'>
                    <path
                        d={window.location.pathname === "/createpost" ? graphics.plus_filled : graphics.plus_outlined}
                    />
                </svg>
            </Link>
            <Link to='/activity'>
                <svg viewBox='0 0 24 24' fill='black' className='navIcon'>
                    <path
                        d={window.location.pathname === "/activity" ? graphics.heart_filled : graphics.heart_outlined}
                    />
                </svg>
            </Link>
            <Link to='/profile'>
                {props.loggedUser ? (
                    <UserImage user_id={props.loggedUser.id} size={0.85} />
                ) : (
                    <svg viewBox='0 0 24 24' fill='black' className='navIcon'>
                        <path
                            d={
                                window.location.pathname === "/profile"
                                    ? graphics.profile_filled
                                    : graphics.profile_outlined
                            }
                        />
                    </svg>
                )}
            </Link>
        </div>
    );
};
