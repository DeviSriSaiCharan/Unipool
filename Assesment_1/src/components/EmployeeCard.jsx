
export default function EmployeeCard(){

    return (
        <div className="p-8 flex gap-7 shadow-2xl rounded-3xl">
            <div className="w-2/12">
                <div className="w-full bg-gray-400 h-16 rounded-lg">
                    {/* image */}
                </div>
            </div>
            <div className="w-10/12">
                <p className="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum vitae itaque dolor amet esse repellat nobis illo optio, fugiat aperiam?</p>
                <p className="font-semibold">Charan</p>
                <p className="text-gray-700 font-semibold">Manager</p>
            </div>
        </div>
    )
}