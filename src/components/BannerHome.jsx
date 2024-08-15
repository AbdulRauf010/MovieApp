import { useSelector } from "react-redux";

const BannerHome = () => {
  const bannerData = useSelector((state) => state.movieoData.bannerData);
  const imgURL = useSelector((state) => state.movieoData.imgURL);
  console.log("banner", bannerData);

  return (
    <div>
      <div>
        {bannerData.map((data, index) => {
          return (
            <div>
              <img src={imgURL + data.backdrop_path} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BannerHome;
