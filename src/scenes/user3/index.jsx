import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material";
import {
  Typography,
  Col,
  ColorPicker,
  Divider,
  Row,
  Space,
  Slider,
} from "antd";
const { Paragraph } = Typography;

const User3 = () => {
  const [customizations3, setCustomizations] = useState(() => {
    const savedState = localStorage.getItem("customizations3");
    return savedState
      ? JSON.parse(savedState)
      : {
          name: "User 3",
          backgroundColor: "#191F45",
          fontSize: 15,
        };
  });
  const [editableStr, setEditableStr] = useState(customizations3.name);

  useEffect(() => {
    localStorage.setItem("customizations3", JSON.stringify(customizations3));
  }, [customizations3, editableStr]);

  const theme = useTheme();

  const handleFontSizeChange = (val) => {
    setCustomizations({ ...customizations3, fontSize: val, name: editableStr });
  };

  const handleColorChange = (color) => {
    const { r, g, b, a } = color.metaColor;
    setCustomizations({
      ...customizations3,
      backgroundColor: `rgba(${r}, ${g}, ${b}, ${a})`,
      name: editableStr,
    });
  };

  return (
    <>
      <div
        style={{
          margin: "20px",
          padding: "20px",
          backgroundColor: customizations3.backgroundColor,
          borderRadius: "10px",
        }}
      >
        <h2 style={{ display: "inline-block" }}>Welcome Mr.</h2>
        <Paragraph
          style={{
            fontSize: "20px",
            paddingLeft: "5px",
            color: theme.palette.secondary[100],
            display: "inline-block",
          }}
          editable={{
            onChange: setEditableStr,
          }}
        >
          {editableStr}
        </Paragraph>
        <Space direction="vertical" style={{ float: "right" }}>
          <Row align="middle">
            <Space>
              <span>Choose backgroundColor: </span>
              <Col>
                <ColorPicker
                  styles={{
                    popupOverlayInner: {
                      width: 468 + 24,
                    },
                  }}
                  presets={[
                    {
                      label: "Recommended",
                      colors: [
                        "#000000",
                        "#000000E0",
                        "#000000A6",
                        "#00000073",
                        "#00000040",
                        "#00000026",
                        "#0000001A",
                        "#00000012",
                        "#0000000A",
                        "#00000005",
                        "#F5222D",
                        "#FA8C16",
                        "#FADB14",
                        "#8BBB11",
                        "#52C41A",
                        "#13A8A8",
                        "#1677FF",
                        "#2F54EB",
                        "#722ED1",
                        "#EB2F96",
                        "#F5222D4D",
                        "#FA8C164D",
                        "#FADB144D",
                        "#8BBB114D",
                        "#52C41A4D",
                        "#13A8A84D",
                        "#1677FF4D",
                        "#2F54EB4D",
                        "#722ED14D",
                        "#EB2F964D",
                      ],
                    },
                    {
                      label: "Recent",
                      colors: [
                        "#F5222D4D",
                        "#FA8C164D",
                        "#FADB144D",
                        "#8BBB114D",
                        "#52C41A4D",
                        "#13A8A84D",
                      ],
                    },
                  ]}
                  onChange={handleColorChange}
                  panelRender={(_, { components: { Picker, Presets } }) => (
                    <div
                      className="custom-panel"
                      style={{
                        display: "flex",
                        width: 468,
                      }}
                    >
                      <div
                        style={{
                          flex: 1,
                        }}
                      >
                        <Presets />
                      </div>
                      <Divider
                        type="vertical"
                        style={{
                          height: "auto",
                        }}
                      />
                      <div
                        style={{
                          width: 234,
                        }}
                      >
                        <Picker />
                      </div>
                    </div>
                  )}
                />
              </Col>
            </Space>
          </Row>
          <div style={{ width: "168px" }}>
            <span>Font Size : </span>
            <Slider
              defaultValue={customizations3.fontSize}
              min={10}
              max={40}
              onChange={handleFontSizeChange}
            />
          </div>
        </Space>
        <div style={{ fontSize: customizations3.fontSize }}>
          <p>
            A user panel is a graphical user interface (GUI) element that allows
            users to interact with an application or website. It typically
            consists of a set of controls, such as buttons, sliders, and text
            boxes, that users can use to input data or perform actions. User
            panels are often used in web applications to provide users with a
            way to customize their experience or access additional
            functionality. The design of a user panel can vary widely depending
            on the application or website it is used in. Some user panels are
            simple and straightforward, while others are more complex and
            feature-rich. Regardless of their design, user panels are an
            important part of many applications and websites, as they provide
            users with a way to interact with the system and perform tasks.
          </p>
          <br />
          <p>
            <b>Admin Panel:</b>
            The Admin Panel provides powerful tools for managing the system and
            overseeing user activities. It grants access to essential features
            like user management, content moderation, and system configuration.
            From here, administrators can efficiently monitor user accounts,
            adjust permissions, and address any issues that may arise.
            Additionally, the Admin Panel offers insightful analytics and
            reporting capabilities, enabling data-driven decision-making for
            optimizing system performance. It serves as the central hub for
            maintaining a smooth and secure user experience.
            <br />
            <b>User Panel:</b>
            The User Panel is designed with simplicity and functionality in
            mind, providing an intuitive interface for users to interact with
            the system. It offers features tailored to the end user's needs,
            such as profile customization, content creation, and communication
            tools. Users can easily navigate through their personalized
            settings, access relevant information, and engage with the
            community. The User Panel fosters a seamless and enjoyable
            experience, empowering users to make the most out of the platform
            while ensuring a user-friendly environment. It serves as the gateway
            to a diverse range of functionalities, encouraging active
            participation and contribution.
          </p>
        </div>
      </div>
    </>
  );
};

export default User3;
