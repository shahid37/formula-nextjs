import Product1 from "./public/assets/1.png";
import Product2 from "./public/assets/2.png";
import Product3 from "./public/assets/3.png";
import DemoImage from "./public/assets/img.png";

export const data = {
  useFullLinks: [
    {
      title: "About us",
      onClick: () => {},
    },
    {
      title: "History",
      onClick: () => {},
    },
    {
      title: "Contact us",
      onClick: () => {},
    },
  ],
  contactInfo: {
    city: "Spain",
    email: " wave@bloowatch.com",
    number: "156-677-124-442-2887",
  },
  sideImage: DemoImage,
  products: [
    {
      productImage: Product1,
      isSaleItem: true,
      name: "LIGTTWAVE BOARD",
      description: "Equipment, Board",
      totalPrice: "$100.00",
      discountPrice: "$150.00",
    },
    {
      productImage: Product2,
      isSaleItem: false,
      name: "SCUBA DIVING WETSUIT",
      description: "Equipment, Board",
      totalPrice: "$150.00",
    },
    {
      productImage: Product3,
      isSaleItem: false,
      name: "SCUBA DIVING WETSUIT",
      description: "Equipment, Board",
      totalPrice: "$150.00",
    },
    {
      productImage: Product2,
      isSaleItem: false,
      name: "SCUBA DIVING WETSUIT",
      description: "Equipment, Board",
      totalPrice: "$150.00",
    },
    {
      productImage: Product1,
      isSaleItem: false,
      name: "SCUBA DIVING WETSUIT",
      description: "Equipment, Board",
      totalPrice: "$150.00",
    },
    {
      productImage: Product3,
      isSaleItem: false,
      name: "SCUBA DIVING WETSUIT",
      description: "Equipment, Board",
      totalPrice: "$150.00",
    },
  ],
  relatedProducts: [
    {
      imgUrl:
        "https://static.wixstatic.com/media/2cd43b_008fa97babc04c609e6cdd2159f7baf6~mv2.png/v1/fill/w_256,h_256,q_90/2cd43b_008fa97babc04c609e6cdd2159f7baf6~mv2.png",
      name: "TUNDER BOARD",
      rating: 4,
    },
    {
      imgUrl:
        "https://static.wixstatic.com/media/2cd43b_008fa97babc04c609e6cdd2159f7baf6~mv2.png/v1/fill/w_256,h_256,q_90/2cd43b_008fa97babc04c609e6cdd2159f7baf6~mv2.png",
      name: "SHORT SURFBOARD FOAM",
      rating: 2,
    },
    {
      imgUrl:
        "https://static.wixstatic.com/media/2cd43b_008fa97babc04c609e6cdd2159f7baf6~mv2.png/v1/fill/w_256,h_256,q_90/2cd43b_008fa97babc04c609e6cdd2159f7baf6~mv2.png",
      name: "MADMAX BOARD",
      rating: 5,
    },
  ],
};
