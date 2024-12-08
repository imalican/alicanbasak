import { title } from "@/components/primitives";
import { ViewAllButton } from "./ViewAllButton";

export const ProjectHeader = () => {
  return (
    <div className="flex justify-between items-start">
      <div>
        <h2
          className={title({ size: "md" })}
          style={{ fontFamily: "Space Grotesk" }}
        >
          Featured Projects
        </h2>
        <p className="text-default-600 mt-2 font-satoshi text-lg">
          A collection of projects that showcase my skills and experience in
          building digital products.
        </p>
      </div>
      <ViewAllButton />
    </div>
  );
};
