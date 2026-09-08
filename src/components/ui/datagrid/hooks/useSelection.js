import { useState } from "react";

const useSelection = () => {

    const [

        selected,

        setSelected,

    ] = useState([]);

    const toggle = (id) => {

        setSelected((prev) =>

            prev.includes(id)

                ? prev.filter(

                      (item) =>

                          item !== id

                  )

                : [

                      ...prev,

                      id,

                  ]

        );

    };

    const clear = () =>

        setSelected([]);

    return {

        selected,

        toggle,

        clear,

        setSelected,

    };

};

export default useSelection;