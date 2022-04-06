import React from "react";

// elements
import { Grid } from "../elements";

// styles
import styled from "styled-components";

const Upload = () => {
  const [file, setFile] = React.useState("");

  const selectFile = (e) => {
    setFile(e.target.files[0].name);

    // 업로드된 파일을 읽어오는 객체 생성
    // const reader = new FileReader();
    // const selectedFile = e.target.files[0];

    // 업로드된 파일 내용을 읽어오기
    //  reader.readAsDataURL(file);
  };
  return (
    <React.Fragment>
      <Grid is_flex>
        <AttachmentDescription
          value={file}
          placeholder="사진을 선택해주세용!"
          onChange={() => {}}
        />
        <AttachmentLabel htmlFor="file">파일찾기</AttachmentLabel>
        <AttachmentInput onChange={selectFile} type="file" id="file" />
      </Grid>
    </React.Fragment>
  );
};

const AttachmentDescription = styled.input`
  display: inline-block;
  height: 40px;
  padding: 0 10px;
  vertical-align: middle;
  border: 1px solid #dddddd;
  width: 78%;
  color: #999999;
`;

const AttachmentLabel = styled.label`
  display: inline-block;
  padding: 10px 20px;
  color: #fff;
  vertical-align: middle;
  background-color: #999999;
  cursor: pointer;
  height: 40px;
  margin-left: 10px;
`;

const AttachmentInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
`;

export default Upload;
