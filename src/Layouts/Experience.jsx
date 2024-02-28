import { Exp1, Exp2, Exp3, Exp4, Exp7, Exp8 } from "../assets";

function Experience() {
    const data = [
        {
            img: Exp1,
            title: "WATERFALLS"
        },
        {
            img: Exp2,
            title: "BONEFIRE EVENING"
        },
        {
            img: Exp7,
            title: "STONE VIEW"
        },
        // {
        //     img: Exp4,
        //     title: "TREEKING"
        // },
        {
            img: Exp8,
            title: "LAKE"
        },
        {
            img: Exp3,
            title: "Malnad Estate Life"
        }
    ];

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-8 text-center">Experiences at Havala Plantation Stay</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                {data.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={item.img} alt={item.title} className="w-full h-60 object-cover" />
                        <h2 className="text-lg font-semibold p-4 mt-2 text-center">{item.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;