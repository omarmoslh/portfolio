import React from "react";
import { motion } from "framer-motion";




const Logo = () => {
  
  
  return (
    <div className=" flex items-center justify-center mt-2">
      <motion.a
        href="/"
        className=" font-Update text-3xl dark:!text-light "
        whileHover={{
          color: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition:{duration:1, repeat: Infinity},
        }}
        
      >
        {" "}
        OM
      </motion.a>
    </div>
  );
};

export default Logo;
