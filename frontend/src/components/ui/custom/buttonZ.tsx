"use client";

import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function ButtonZ({props}) {
  return (
    <div>
        <button > {props.child} </button>
    </div>
  );
}