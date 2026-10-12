function Footer() {
    return (
        <div className="flex justify-center items-center p-4 bg-gray-800 text-white">
            <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
        </div>
    );
}

export default Footer;
