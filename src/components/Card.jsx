export default function Card({ judul, content}) {
    return (
        <>
        <h1 className="text-white">judul: {judul}</h1>
        <p className="text-white">content: {content}</p>
        </>
    );
}