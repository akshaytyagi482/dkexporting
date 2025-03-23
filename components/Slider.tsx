import React from 'react';
import Image from 'next/image'; // Added Next.js Image import

const Slider = () => {
  return (
    <div className="w-full my-10 h-[100px]">
      <div className="moving-text">
        <div className="con">
          <h1>
            <Image src="/ISO logo.png" alt="ISO Logo" width={100} height={50} />
          </h1>
          <h1>
            <Image src="/MSME logo.png" alt="MSME Logo" width={100} height={50} />
          </h1>
          <h1>
            <Image src="/Apeda logo.png" alt="Apeda Logo" width={100} height={50} />
          </h1>
          <h1>
            <Image src="/ECGC logo.png" alt="ECGC Logo" width={100} height={50} />
          </h1>
          <h1>
            <Image src="/FIEO logo.png" alt="FIEO Logo" width={100} height={50} />
          </h1>
          <h1>
            <Image src="/Ministry of Commerce logo.png" alt="Ministry of Commerce Logo" width={100} height={50} />
          </h1>
          <h1>
            <Image
              className="mix-blend-multiply"
              src="/Ministry of DGFT logo.png"
              alt="Ministry of DGFT Logo"
              width={100}
              height={50}
            />
          </h1>
          {/* <h1><Image src="/SBoi.png" alt="SBoi Logo" width={100} height={50} /></h1> */}
        </div>
        <div className="con">
          <h1>
            <Image src="/ISO logo.png" alt="ISO Logo" width={100} height={50} />
          </h1>
          <h1>
            <Image src="/MSME logo.png" alt="MSME Logo" width={100} height={50} />
          </h1>
          <h1>
            <Image src="/Apeda logo.png" alt="Apeda Logo" width={100} height={50} />
          </h1>
          <h1>
            <Image src="/ECGC logo.png" alt="ECGC Logo" width={100} height={50} />
          </h1>
          <h1>
            <Image src="/FIEO logo.png" alt="FIEO Logo" width={100} height={50} />
          </h1>
          <h1>
            <Image src="/Ministry of Commerce logo.png" alt="Ministry of Commerce Logo" width={100} height={50} />
          </h1>
          <h1>
            <Image
              className="mix-blend-multiply"
              src="/Ministry of DGFT logo.png"
              alt="Ministry of DGFT Logo"
              width={100}
              height={50}
            />
          </h1>
          {/* <h1><Image src="/SBoi.png" alt="SBoi Logo" width={100} height={50} /></h1> */}
        </div>
        <div className="con">
          <h1>
            <Image src="/ISO logo.png" alt="ISO Logo" width={100} height={50} />
          </h1>
          <h1>
            <Image src="/MSME logo.png" alt="MSME Logo" width={100} height={50} />
          </h1>
          <h1>
            <Image src="/Apeda logo.png" alt="Apeda Logo" width={100} height={50} />
          </h1>
          <h1>
            <Image src="/ECGC logo.png" alt="ECGC Logo" width={100} height={50} />
          </h1>
          <h1>
            <Image src="/FIEO logo.png" alt="FIEO Logo" width={100} height={50} />
          </h1>
          <h1>
            <Image src="/Ministry of Commerce logo.png" alt="Ministry of Commerce Logo" width={100} height={50} />
          </h1>
          <h1>
            <Image
              className="mix-blend-multiply"
              src="/Ministry of DGFT logo.png"
              alt="Ministry of DGFT Logo"
              width={100}
              height={50}
            />
          </h1>
          {/* <h1><Image src="/SBoi.png" alt="SBoi Logo" width={100} height={50} /></h1> */}
        </div>
      </div>
    </div>
  );
};

export default Slider;