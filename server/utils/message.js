exports.generateMessage = (from, text) => {
    return {
        from,
        text,
        created_at: new Date().getTime()
    };
};

