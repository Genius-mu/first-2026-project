type RBannerProps = {
  txtVal: string;
};

const RBanner = ({ txtVal }: RBannerProps) => {
  return (
    <section className="w-full h-fit bg-[#101010] flex justify-center items-center py-[10%]">
      <h2 className="uppercase font-semibold text-3xl text-white">{txtVal}</h2>
    </section>
  );
};

export default RBanner;
