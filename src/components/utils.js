import moment from 'moment'

export const formatDate = function (date, form) {
    if (!date) {
        return null;
    } else if (date.toLowerCase() === 'now') {
        return 'Now';
    } else {
        return moment(date).format(form);
    }
}

export const sortPosts = function (posts) {
    let priorizedPosts = posts.filter(p => p.node.frontmatter.forceOrder);
    priorizedPosts = priorizedPosts.sort((a,b) => {
        return a.node.frontmatter.forceOrder - b.node.frontmatter.forceOrder;
    }); 
    
    const nonPriorizedPosts = posts.filter(p => !p.node.frontmatter.forceOrder);

    return [...priorizedPosts, ...nonPriorizedPosts];
}