import { useState } from "react";

let nextId = 1;

export default function CreateCard() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [note, setNote] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [cards, setCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClickAdd = (na, ph, ad, no, img) => {
        setCards([
            ...cards,
            {
                id: nextId++,
                name: na,
                phone: ph,
                address: ad,
                note: no,
                image: img
            }
        ]);

       
        setName('');
        setPhone('');
        setAddress('');
        setNote('');
        setImageUrl('');
    };

    const handleOpenModal = (card) => {
        setSelectedCard(card);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedCard(null);
    };

    return (
        <div className="p-6 font-sans">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">เพิ่มข้อมูลนามบัตร</h1>
            <div className="max-w-md mx-auto mb-6">
                <div className="mb-3">
                    <label className="block text-sm font-bold mb-1">ชื่อ-สกุล:</label>
                    <input
                        name="cName"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-2 py-1 border rounded-md text-sm"
                    />
                </div>
                <div className="mb-3">
                    <label className="block text-sm font-bold mb-1">เบอร์โทร:</label>
                    <input
                        name="cPhone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-2 py-1 border rounded-md text-sm"
                        pattern="[0-9]*"
                        inputMode="numeric"
                    />
                </div>
                <div className="mb-3">
                    <label className="block text-sm font-bold mb-1">ที่อยู่:</label>
                    <textarea
                        name="cAddress"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full px-2 py-1 border rounded-md text-sm"
                    />
                </div>
                <div className="mb-3">
                    <label className="block text-sm font-bold mb-1">ข้อมูลผู้ถือบัตร:</label>
                    <textarea
                        name="cNote"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        className="w-full px-2 py-1 border rounded-md text-sm"
                    />
                </div>
                <div className="mb-3">
                    <label className="block text-sm font-bold mb-1">URL รูปภาพ:</label>
                    <input
                        name="cImage"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        className="w-full px-2 py-1 border rounded-md text-sm"
                    />
                </div>
                <button onClick={() => handleClickAdd(name, phone, address, note, imageUrl)} className="w-full px-3 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
                    เพิ่มนามบัตร
                </button>
            </div>
            <div className="w-full mt-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">My Lists</h2>
                    <span className="text-gray-700">จำนวนรายการ: {cards.length}</span>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full bg-blue-50 border-collapse">
                        <thead>
                            <tr className="bg-blue-100">
                                <th className="px-4 py-2 border text-center">ID</th>
                                <th className="px-4 py-2 border text-center">ชื่อ-สกุล</th>
                                <th className="px-4 py-2 border text-center">เบอร์โทร</th>
                                <th className="px-4 py-2 border text-center">ที่อยู่</th>
                                <th className="px-4 py-2 border text-center">ข้อมูลผู้ถือบัตร</th>
                                <th className="px-4 py-2 border text-center">รูปภาพ</th>
                                <th className="px-4 py-2 border text-center">รายละเอียด</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cards.map(card => (
                                    <tr key={card.id} className="bg-blue-50 even:bg-blue-100">
                                        <td className="px-4 py-2 border text-center">{card.id}</td>
                                        <td className="px-4 py-2 border text-center">{card.name}</td>
                                        <td className="px-4 py-2 border text-center">{card.phone}</td>
                                        <td className="px-4 py-2 border text-center">{card.address}</td>
                                        <td className="px-4 py-2 border text-center">{card.note}</td>
                                        <td className="px-4 py-2 border text-center">
                                            {card.image ? (
                                                <img src={card.image} alt="Card" className="w-24 h-24 object-cover mx-auto rounded-md" />
                                            ) : (
                                                'ไม่มีรูปภาพ'
                                            )}
                                        </td>
                                        <td className="px-4 py-2 border text-center">
                                            <button onClick={() => handleOpenModal(card)} className="px-3 py-1 text-white bg-green-600 rounded-md hover:bg-green-700">
                                                ดูรายละเอียด
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {isModalOpen && selectedCard && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                    <div className="bg-white p-6 rounded-md shadow-lg max-w-lg mx-auto">
                        <h2 className="text-2xl font-bold mb-4">รายละเอียดนามบัตร</h2>
                        <div className="mb-3">
                            <label className="block text-sm font-bold mb-1">ชื่อ-สกุล:</label>
                            <p>{selectedCard.name}</p>
                        </div>
                        <div className="mb-3">
                            <label className="block text-sm font-bold mb-1">เบอร์โทร:</label>
                            <p>{selectedCard.phone}</p>
                        </div>
                        <div className="mb-3">
                            <label className="block text-sm font-bold mb-1">ที่อยู่:</label>
                            <p>{selectedCard.address}</p>
                        </div>
                        <div className="mb-3">
                            <label className="block text-sm font-bold mb-1">ข้อมูลผู้ถือบัตร:</label>
                            <p>{selectedCard.note}</p>
                        </div>
                        <div className="mb-3">
                            <label className="block text-sm font-bold mb-1">รูปภาพ:</label>
                            {selectedCard.image ? (
                                <img src={selectedCard.image} alt="Card" className="w-32 h-32 object-cover rounded-md" />
                            ) : (
                                'ไม่มีรูปภาพ'
                            )}
                        </div>
                        <button onClick={handleCloseModal} className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700">
                            ปิด
                        </button>
                    </div>
                    
                </div>
            )}
            <a href="/" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Back</a>
        </div>
    );
}

