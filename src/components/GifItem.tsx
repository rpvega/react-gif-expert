import PropTypes from 'prop-types';

export const GifItem = ({ title, url }: { title: string; url: string }) => {

    return (
        <div className="card">
            <img src={url} alt="" />
            <p>{title}</p>
        </div>
    )
}

GifItem.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string
}

