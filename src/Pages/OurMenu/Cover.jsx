import { Parallax } from 'react-parallax';

const Cover = ({ img, title, subtitle }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className=" my-12">
                <div className='bg-fixed bg-center min-h-[700px] bg-no-repeat flex flex-col items-center justify-center p-12'>
                    <div className='bg-[#15151599] text-white flex flex-col items-center justify-center text-center lg:w-4/6 md:w-4/6 mx-auto lg:py-24 md:p-20 p-10'>
                        <h3 className='font-bold lg:text-6xl md:text-4xl text-xl'>{title}</h3>
                        <hr />
                        <p>{subtitle}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;
