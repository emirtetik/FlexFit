
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full  text-gray-400 py-2 px-10 mt-3 border-t border-gray-600">
      <div className="container  text-start text-[9px] font-mont">
        © {year} FlexFit. Tüm hakları saklıdır.
      </div>
    </footer>
  );
};

export default Footer;