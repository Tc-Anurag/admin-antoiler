import React from "react";

interface ButtonProps {
  label?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
  disabled?: boolean;
  icon?: React.ComponentType<{ style?: React.CSSProperties }>; // Accepts a React component type with optional style
  iconPosition?: "left" | "right";
  iconSpacing?: string; // Spacing between icon and text
  iconStyle?: React.CSSProperties; // Style for the icon
}

const Button: React.FC<ButtonProps> = ({
  label = "Button",
  onClick = () => {},
  style = {},
  className = "",
  disabled = false,
  icon: Icon = null,
  iconPosition = "left",
  iconSpacing = "8px", // Default spacing
  iconStyle = {}, // Default empty style
}) => {
  return (
    <button
      onClick={onClick}
      style={style}
      className={`button ${className}`}
      disabled={disabled}
      aria-label={label} // For accessibility
    >
      {Icon && iconPosition === "left" && (
        <span className="icon-left" style={{ marginRight: iconSpacing }}>
          <Icon style={iconStyle} />
        </span>
      )}
      {label}
      {Icon && iconPosition === "right" && (
        <span className="icon-right" style={{ marginLeft: iconSpacing }}>
          <Icon style={iconStyle} />
        </span>
      )}
    </button>
  );
};

export default Button;
