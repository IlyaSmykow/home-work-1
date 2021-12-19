import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styles from './App.module.scss';
import { Button } from '@mui/material';
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';


export const Comment = ({comment, index, deleteComments}) => {

    return (
        <div className={styles.review__wrapper}>
            <AccountCircleIcon fontSize="large" />
            <div className={styles.review__text_block}>
                <Typography sx={{ fontSize: 15, width: 200 }} color="text.secondary" gutterBottom>
                    {comment.name}
                </Typography>
                <Typography sx={{ fontSize: 12, width: 200}} gutterBottom>
                    {comment.text}
                </Typography>
                <Typography sx={{ fontSize: 12, width: 200}} color="text.secondary" gutterBottom>
                    {comment.createdAt}
                </Typography>
            </div>
            <Button>
                <DoNotDisturbOnIcon onClick={() => deleteComments(index)}/>
            </Button>
        </div>
    )
}