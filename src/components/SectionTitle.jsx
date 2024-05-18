

const SectionTitle = ({subtitle,title}) => {
    return (
        <div className="my-14 lg:w-1/3 md:w-1/2 w-2/3 px-4 mx-auto text-center">
            <p className="text-yellow-500 pb-2">--- {subtitle} ---</p>
            <h1 className="lg:text-4xl md:text-4xl text-xl font-bold border-y-2 py-4">{title}</h1>
        </div>
    );
};

export default SectionTitle;