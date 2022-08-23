import React from "react";
import { Button } from "rebass/styled-components";

type Props = {
  label: string;
  style?: React.CSSProperties;
  rightIcon?: React.ReactElement;
  loading?: boolean;
  onPress: (e: React.MouseEvent<HTMLElement>) => void;
};

const AppButton = ({ label, style, rightIcon, onPress, loading = false }: Props) => {
  return (
    <Button
      onClick={onPress}
      sx={{
        ...style,
        border: `1.5px solid #2b2b2e`,
        transition: "0.5s",
        ":hover": {
          backgroundColor: "#232324",
          cursor: "pointer",
        },
      }}
    >
      {loading ? (
        <i className="fa fa-spinner fa-spin"></i>
      ) : (
        <>
          {label} {rightIcon}
        </>
      )}
    </Button>
  );
};

export default AppButton;
