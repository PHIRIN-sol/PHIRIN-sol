{\rtf1\ansi\ansicpg1252\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.addEventListener("DOMContentLoaded", function () \{\
    const connectWalletBtn = document.getElementById("connectWalletBtn");\
    const pointsDisplay = document.getElementById("pointsDisplay");\
    const earnPointsButtons = document.querySelectorAll(".earn-points");\
    let userAddress = null;\
    let points = 0;\
\
    async function connectPhantomWallet() \{\
        if (window.solana && window.solana.isPhantom) \{\
            try \{\
                const resp = await window.solana.connect();\
                userAddress = resp.publicKey.toString();\
                alert(`Connected to wallet: $\{userAddress\}`);\
            \} catch (err) \{\
                console.error("Connection to Phantom wallet failed", err);\
            \}\
        \} else \{\
            alert("Phantom wallet not found. Please install it from the Chrome Web Store.");\
        \}\
    \}\
\
    function addPoints(pointValue) \{\
        if (userAddress) \{\
            points += pointValue;\
            pointsDisplay.textContent = points;\
        \} else \{\
            alert("Please connect your Phantom wallet first.");\
        \}\
    \}\
\
    connectWalletBtn.addEventListener("click", connectPhantomWallet);\
\
    earnPointsButtons.forEach(button => \{\
        button.addEventListener("click", (event) => \{\
            const points = parseInt(event.target.getAttribute("data-points"));\
            addPoints(points);\
        \});\
    \});\
\});\
}