import React, { useCallback, useRef, useState, useEffect } from 'react';
import { toPng } from 'html-to-image';
import Certificate from '../assets/Certificate.png';
import homepage from '../assets/homepage.jpg';
import Logo_unipool from '../assets/Logo_unipool.png';
import QRCode from 'qrcode.react';

export default function CertificateDiv() {
    const certificateRef = useRef();
    const [name, setName] = useState("");

    const onButtonClick = useCallback(() => {
        if (certificateRef.current === null) {
            return;
        }

        toPng(certificateRef.current, { cacheBust: true })
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = `${name}_certificate.png`;
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => {
                console.log(err);
            });
    }, [certificateRef, name]);

    return (
        <div className="w-full px-20 py-2">
            <div className="flex gap-5">
                <div className="w-7/12">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Recipient Name"
                        className="mb-4 p-2 border w-full"
                    />
                    <div className="relative shadow-2xl" ref={certificateRef}>
                        <img className="w-full" src={Certificate} alt="certificate" />
                        <div className="absolute right-[13%] top-[68%] w-[8%]">
                            {
                                name && <QRCode
                                value={name}
                                size={60}

                            />
                            }
                        </div>
                        <div className="absolute top-0 w-full h-[96%] flex justify-center items-center">
                            <div className="max-w-[33rem]">
                                <p className="p-2 text-[2vw] text-center text-nowrap">{name}</p>
                            </div>
                        </div>
                    </div>
                    <p className="w-[90%] mt-4">
                        The certificate affirms that <span className="text-yellow-400 font-semibold">{name ? name : "Your Name"}</span> has satisfactorily fulfilled the requirements outlined. This validation ensures its authenticity, having been duly verified and granted by Unipool.
                    </p>
                </div>
                <div className="w-3/12 p-4">
                    <h2 className="text-yellow-400 text-3xl font-medium">Certificate recipient</h2>
                    <p className="text-xl font-semibold">{name}</p>
                    <div className="py-4 mt-4">
                        <p className="text-center">Issued by</p>
                        <img src={homepage} alt="Homepage logo" />
                    </div>
                    <button onClick={onButtonClick} disabled={name ? false : true} className="px-4 py-2 bg-yellow-400 rounded-3xl font-semibold">Download Certificate</button>
                </div>
            </div>
        </div>
    );
}
