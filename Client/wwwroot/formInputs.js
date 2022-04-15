function initSelect2(id, placeholder) {
	$('#' + id).select2({
		placeholder: placeholder,
		minimumResultsForSearch: Infinity,
	});
}