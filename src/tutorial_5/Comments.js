import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Comment } from './Comment';



export const Comments = ({comments, deleteComments}) => {

    return (
        <div>
            <Card sx={{ width: 345 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                        Отзывы:
                    </Typography>
                    {
                        comments.length > 0 ? comments.map((comment, index) => <Comment 
                                                                                key={comment.email} 
                                                                                comment={comment} 
                                                                                index={index} 
                                                                                deleteComments={deleteComments}/>) 
                        : "Отзывы отсутствуют"
                    }
                </CardContent>
            </Card>
        </div>
    )
};