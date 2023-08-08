import PropTypes from "prop-types";

export default function Content({ children }) {
  return (
    <div className="bg-whtie relative  flex h-full overflow-hidden">
      <div className="flex-1 w-full h-full relative ">{children}</div>
      <div className="2xl:w-[400px] xl:w-[150px] lg:w-[80px] w-0   h-full "></div>
    </div>
  );
}

Content.propTypes = {
  children: PropTypes.any,
};
