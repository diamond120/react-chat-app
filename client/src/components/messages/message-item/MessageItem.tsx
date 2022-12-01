import { FC } from "react";
import { Avatar, Box, Card, Stack, Typography } from "@mui/material";

import { IMessage } from "../../../models/IMessage";

import classes from "./MessageItem.module.scss";

interface MessageItemProps {
  message: IMessage;
}

const MessageItem: FC<MessageItemProps> = ({ message }) => {
  return (
    <Box>
      <Stack direction="row" alignItems="center">
        <Avatar>{message.ownerId}</Avatar>
        <Typography>Username</Typography>
      </Stack>
      <Card classes={{ root: classes.message }}>
        <Typography variant="body1">{message.content}</Typography>
      </Card>
    </Box>
  );
};

export default MessageItem;
