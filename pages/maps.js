import React from 'react';
import Head from 'next/head'
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Maps from '../components/Maps'
import MapsNew from '../components/MapsNew'
export default function Home() {
    return (
        <div>


            <Nav></Nav>

            <MapsNew></MapsNew>

            <Footer></Footer>

        </div>
    )
}