function showGroups() {
	$.ajax({
		url : '/ajax/groups/show_groups',
		data : {},
		type : 'get',
		cache : false,
		success : function(response, textStatus, xhr) {
			$('#groups').html(response);
		}
	});
};

function showGroupRoles(groupId) {
	$.ajax({
		url : '/ajax/groups/show_group_roles',
		data : {
			groupId : groupId
		},
		type : 'get',
		cache : false,
		success : function(response, textStatus, xhr) {
			$('#groupRoles').html(response);
		}
	});
};