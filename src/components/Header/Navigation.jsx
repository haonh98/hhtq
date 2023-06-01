import React from "react";

export const Navigation = () => {
  const menus = [
    { id: 1, name: "Trang chủ", link: "#", icon: "" },
    { id: 2, name: "Bảng xếp hạng", link: "#", icon: "" },
    { id: 3, name: "Tu tiên", link: "#", icon: "" },
    { id: 4, name: "Trùng sinh", link: "#", icon: "" },
    { id: 5, name: "Kiếm hiệp", link: "#", icon: "" },
    { id: 6, name: "Xuyên không", link: "#", icon: "" },
    { id: 7, name: "Hiện đại", link: "#", icon: "" },
    { id: 8, name: "OVA", link: "#", icon: "" },
  ];
  return (
    <div className="hidden md:block md:w-full md:bg-rose-600">
      <nav className="max-w-[1200px] mx-auto flex items-center py-[14px] px-6 space-x-5">
        {menus.map((menu) => (
          <a
            className="text-xl font-medium text-white"
            href={menu.link}
            key={menu.id}
          >
            {menu.name}
          </a>
        ))}
      </nav>
    </div>
  );
};
