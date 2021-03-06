import {
  useState,
  ReactNode,
  ElementType,
  HTMLProps,
  CSSProperties,
} from "react";
import Badge, { IBadge } from "../Badge";
import { Avatar } from "./Avatar.styled";

export interface IAvatar extends HTMLProps<HTMLElement> {
  variant?: "circular" | "rounded" | "square" | string;
  alt?: string;
  children?: ReactNode;
  component?: ElementType;
  style?: CSSProperties;
  src?: string;
  srcSet?: string;
  imgProps?: HTMLProps<HTMLImageElement>;
  sizes?: string;
  badge?: IBadge;
}

const Index = ({
  component,
  variant = "circular",
  alt,
  children,
  style,
  src,
  srcSet,
  imgProps,
  sizes,
  badge,
  ...rest
}: IAvatar): JSX.Element => {
  const [imageError, setImageError] = useState<boolean>(false);
  return (
    <>
      {(src || alt || children) && (
        <Avatar as={component} style={{ ...style }} variant={variant} {...rest}>
          {src && !imageError && (
            <img
              src={src}
              alt={alt}
              srcSet={srcSet}
              onError={() => setImageError(true)}
            />
          )}
          {(imageError || (!src && alt)) && alt?.charAt(0).toUpperCase()}
          {(imageError || (!src && !alt)) && children}
          {!badge?.invisible && (
            <Badge
              variant={badge?.variant}
              style={badge?.style}
              badgeContent={badge?.badgeContent}
              overlap={badge?.overlap}
              anchorOrigin={badge?.anchorOrigin}
              max={badge?.max}
              component={badge?.component}
              color={badge?.color}
            />
          )}
        </Avatar>
      )}
    </>
  );
};

Index.defaultProps = {
  variant: "circular",
};

export default Index;
